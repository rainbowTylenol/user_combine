package com.spring.member;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


/**
* @Class Name : LoginController.java
* @Description : login관련 컨트롤러 
* @Modification Information
* @
* @  	수정일               	 수정자                  	수정내용
* @ -----------   ---------   -------------------------------
* @ 2019. 07. 15         황진석            		최초생성
* @ 2019. 07. 16 	황진석				로그인/로그아웃, 이메일 찾기 컨트롤러 추가
* @ 2019. 07. 17 	황진석				
* @ 2019. 07. 22	이웅식			회원가입 + 가입시 메일&닉네임 중복확인 구현
* @author bit 2조
* @since 2019. 07.01
* @version 1.0
* @see
*
*  Copyright (C) by Bit All right reserved.
*/

@Controller
public class LoginController {
   
   @Autowired
   private MemberService memberService;
   
   /**
    * 로그인
    * @param vo - 로그인시 입력한 정보가 담긴 MemberVO
    * @param request
    * @param response
    * @param model
    * @return "index"
    * @throws Exception 
    */
   @RequestMapping(value="/Login.do")
   public String MemberLogin(MemberVO vo, HttpServletRequest request, HttpServletResponse response, Model model) throws Exception {
      String email= vo.getM_email();
      String pw = vo.getM_password();
      HttpSession session = request.getSession();
      
      int check = memberService.userCheck(email, pw);
      if(check == 1){
         session.setAttribute("m_email", email);
         return "index";
      }else if( check == -1) {
         response.setContentType("text/html; charset=utf-8");
         PrintWriter out = response.getWriter();
         out.println("<script>");
         out.println("alert('비밀번호가 다릅니다. 확인해주세요!');");
         out.println("history.go(-1);");
         out.println("</script>");
         out.close();
         return "index";
      }else {
         response.setContentType("text/html; charset=utf-8");
         PrintWriter out = response.getWriter();
         out.println("<script>");
         out.println("alert('아이디 혹은 비밀번호가 다릅니다. 확인해주세요!');");
         out.println("history.go(-1);");
         out.println("</script>");
         out.close();
         return "index";
      }
   }
   
   /**
    * 로그아웃
    * @param request
    * @param response
    * @param model
    * @return "index"
    */
   @RequestMapping(value="/Logout.do")
   public String MemberLogOut(HttpServletRequest request, HttpServletResponse response, Model model)  {
      HttpSession session = request.getSession();
      session.invalidate();
      return "index";
   }
   
   /**
    * 이메일 찾기
    * @param vo - 아이디 찾기 시 입력한 정보가 담긴 MemberVO
    * @param request
    * @param response
    * @param model
    * @return String
    */
   @RequestMapping(value="/id_find.do", method=RequestMethod.GET, produces="application/json")
   public @ResponseBody String id_find(MemberVO vo, HttpServletRequest request, HttpServletResponse response, Model model) {  
	   String phone = request.getParameter("m_phone1") + request.getParameter("m_phone2") + request.getParameter("m_phone3");
	   vo.setM_phone(phone);
	   String email = memberService.findEmail(vo);
	   if(email == "fail")
		  return "fail";
	   else
		  return email;
   }
   
   /**
    * 비밀번호 찾기
    * @param vo - 비밀번호 찾기 시 입력한 정보가 담긴 MemberVO
    * @param request
    * @param response
    * @param model
    * @return String
    */
   @RequestMapping(value="/pw_find.do", method=RequestMethod.GET)
   public @ResponseBody String pw_find(MemberVO vo, HttpServletRequest request, HttpServletResponse response, Model model) {  
	   String phone = request.getParameter("m_phone1") + request.getParameter("m_phone2") + request.getParameter("m_phone3");
	   vo.setM_phone(phone);
	   MemberVO memberVO = memberService.findPw(vo);
	   
	   if(memberVO != null) {
		   return "success";
	   }else {
		   return "fail";
	   }
	}
   /**
    * 회원가입
    * @param vo - 로그인시 입력한 정보가 담긴 MemberVO
    * @param request
    * @param response
    * @param model
    * @return "index"
    * @throws Exception 
    */
   @PostMapping("/memberJoin.do") 
   String memberJoin(MemberVO vo, HttpServletRequest request, HttpServletResponse response) {
	   String phone = request.getParameter("m_phone1") + request.getParameter("m_phone2") + request.getParameter("m_phone3");
	   vo.setM_phone(phone);
	   memberService.memberJoin(vo);
	   	   
	   return "index";
   }
   /**
    * 로그인
    * @param vo - 로그인시 입력한 정보가 담긴 MemberVO
    * @param request
    * @param response
    * @param model
    * @return "application/text"
    * @throws Exception 
    */
   @RequestMapping(value="/email_overlap_chk.do", method=RequestMethod.GET, produces="application/json")
   public @ResponseBody String emailOverlapChk (@RequestParam(value="m_email") String m_email, HttpServletRequest request, HttpServletResponse response, Model model) {
	  MemberVO vo = new MemberVO();
	  vo.setM_email(m_email);
	  System.out.println("입력된 값은 =" + vo.getM_email());
	  if( memberService.emailOverlapChk(vo)) {
		   return "success";
	   }else {
		   return "fail";
	   }
   }
   /**
    * 로그인
    * @param vo - 로그인시 입력한 정보가 담긴 MemberVO
    * @param request
    * @param response
    * @param model
    * @return "application/text"
    * @throws Exception 
    */
	  @RequestMapping(value="/nick_overlap_chk.do", method=RequestMethod.GET, produces="application/json")
	   public @ResponseBody String nickOverlapChk (@RequestParam(value="m_nickname") String m_nickname, HttpServletRequest request, HttpServletResponse response, Model model) {
		  MemberVO vo = new MemberVO();
		  vo.setM_nickname(m_nickname);
		  System.out.println("입력된 값은 =" + vo.getM_nickname());
		  if( memberService.nickOverlapChk(vo)) {
			   return "success";
		   }else {
			   return "fail";
		   }
	  }

   @RequestMapping(value="/pw_new.do", method=RequestMethod.GET)
   public @ResponseBody String pw_new(MemberVO vo, HttpServletRequest request, HttpServletResponse response, Model model) {
	   int count = memberService.updatePw(vo);
	   
	   if(count == 1) {
		   return "success";
	   }else {
		   return "fail";
	   }
   }

   
   
   
   
   
   
}