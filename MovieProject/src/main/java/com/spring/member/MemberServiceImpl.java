package com.spring.member;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;
import lombok.Setter;

@Service("memberService")
@AllArgsConstructor
public class MemberServiceImpl implements MemberService {
	@Autowired
	private SqlSession sqlSession;
	
	@Setter(onMethod_ = {@Autowired})
	private MemberDAO memberDAOglobal;
	
	@Override
	public int insertMember(MemberVO vo) {
		// TODO Auto-generated method stub
		return 0;
	}
	

	/**
	 * 로그인 시 회원 체크
	 * @param email - 입력한 email
	 * @param pw - 입력한 password
	 * @return 회원 여부 결과
	 */
	@Override
	public int userCheck(String email, String pw) {
		int x = -1;
		MemberDAO memberDAO = sqlSession.getMapper(MemberDAO.class);
		MemberVO vo = memberDAO.userCheck(email);
		
		if(vo != null) {
			if(pw.equals(vo.getM_password()))
				x = 1; // 아이디/비밀번호 둘다 맞는경우
			else
				x = -1;// 아이디는 맞지만 비밀번호가 다른경우
		}else 
			x = 0;  // 회원이 아닌 경우
		return x;
	}

	@Override
	public MemberVO getMember(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateMember(MemberVO vo) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void deleteMember(String id) {
		// TODO Auto-generated method stub

	}

	@Override
	public String findEmail(MemberVO vo) {
		MemberDAO memberDAO = sqlSession.getMapper(MemberDAO.class);
		String email = memberDAO.findEmail(vo);
		
		if(email != null) { 
			return email;
		}
		else
			return  "fail";
					
	}

	@Override
	public MemberVO findPw(MemberVO vo) {
		MemberDAO memberDAO = sqlSession.getMapper(MemberDAO.class);
		MemberVO memberVO = memberDAO.findPw(vo);
		if(memberVO == null) {
			return null;
		}else {
			return memberVO;
		}
	}


	/**
	 * 회원가입
	 * @param memberVO vo
	 */
	@Override
	public void memberJoin(MemberVO vo) {
		vo.setM_image("");
		vo.setM_cert("N");
		vo.setM_deleteyn("N");
		vo.setM_following(0);
		vo.setM_follower(0);
		vo.setM_level("BRONZE");
		vo.setM_blacklist("N");
		
		memberDAOglobal.memberJoin(vo);
		}

	/**
	 * 계정 중복확인
	 * @param memberVO vo
	 */
	@Override
	public boolean emailOverlapChk(MemberVO vo) {
		if (memberDAOglobal.emailOverlapChk(vo.getM_email()) == 0) {
			System.out.println("일치하는 메일 없음");
			return true;
		} else {
			System.out.println("일치하는 메일 존재. 1 on n");
			return false;
			
		}
	}

	/**
	 * 닉네임 중복확인
	 * @param memberVO vo
	 */
	@Override
	public boolean nickOverlapChk(MemberVO vo) {
		System.out.println("11111111111111111111111111: " + memberDAOglobal.nickOverlapChk(vo.getM_nickname()));
		if (memberDAOglobal.nickOverlapChk(vo.getM_nickname()) == 0) {
			System.out.println("일치하는 닉네임 = 사용 가능");
			return true;
		} else {
			System.out.println("일치하는 닉네임 존재. 1 on n");
			return false;
			
		}
	}
	
	


	@Override
	public int updatePw(MemberVO vo) {
		MemberDAO memberDAO = sqlSession.getMapper(MemberDAO.class);
		int num = memberDAO.updatePw(vo);
		return num;
	}


}
