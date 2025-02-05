<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ page import="com.spring.member.MemberVO" %>
<%
	MemberVO member = (MemberVO)request.getAttribute("member");
%>
<!--
/**
* @Class Name : mypage.jsp
* @Description : 마이페이지 첫 화면
* @Modification Information
* @
* @  수정일     		     수정자            		수정내용
* @ ---------   ---------   -------------------------------
* @ 2019.07.06         황진석      		 	최초생성
* @author bit 2조
* @since 2019. 07.01
* @version 1.0
* @see
*
*  Copyright (C) by Bit All right reserved.
*/
-->
<%@ include file="../header1.jsp"%>

<!-- 2. 여기에 페이지별 css 추가해주세요 -->

<link rel="stylesheet" href="<c:url value="/resources/css/hjs.css" />">
<!-- 3. heaer2.jsp : header -->
<%@ include file="../header2.jsp" %>

<div class="hero user-hero">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="hero-ct">
					<h1>Edward kennedy’s profile</h1>
					<ul class="breadcumb">
						<li class="active"><a href="#">Home</a></li>
						<li> <span class="ion-ios-arrow-right"></span>Rated movies</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="buster-light">
	<div class="page-single">
		<div class="container">
			<div class="row ipad-width2">
				<div class="col-md-3 col-sm-12 col-xs-12">
						<div class="info">
							<h2> <strong><%= member.getM_name() %></strong> </h2>
							<h3> <strong><%= member.getM_email() %></strong></h3>
						</div>
					<div class="user-information-hjs">
						<div class="user-fav">
								<ul>
									<li><a href="mypage.do">마이페이지</a></li>
								</ul>
										
								<ul>
									<li>회원 정보</li>
									<li><a href="pw_confirm.do?id=<%= member.getId() %>">&nbsp;&nbsp;&nbsp;&nbsp;회원정보수정</a></li>
									<li><a href="member_out.do">&nbsp;&nbsp;&nbsp;&nbsp;회원탈퇴</a></li>
								</ul>
					
								<ul>
									<li>고객센터</li>
									<li><a href="one_list.do">&nbsp;&nbsp;&nbsp;&nbsp;1:1 문의내역</a></li>
									<li><a href="faq.do">&nbsp;&nbsp;&nbsp;&nbsp;FAQ</a></li>
								</ul>
							</div>
					</div>
				</div>
				<div class="col-md-9 col-sm-12 col-xs-12">
					<div class="info">
						<h1> <strong>마이 페이지</strong></h1>
					</div>
					<hr class="hr_style"/>
					<div class="form-style-1-hjs user-pro-hjs">
						<div style="display:block;">
							<div class="information-hjs">
								<div class="user-img">
									<a href="#"><img src="resources/images/uploads/user-img.png" alt="사진등록"><br></a><br>
									<a href="#" class="redbtn1">사진 등록</a>
									<br>
								</div>
								
								<div class="hjs-info" >
									<h4> 이름: <%= member.getM_name() %></h4> 
									<h4> 닉네임: <%= member.getM_nickname() %></h4> 
									<h4> 이메일: <%= member.getM_email() %></h4> 
									<h4> 선호장르: <%= member.getM_favorite() %></h4> 
								</div>
							</div>
							
							<br><br>
							<div class="div_one">
								<table class="tb_hjs">
									<caption class="caption-hjs"> 
										<h2>1:1 문의 내역 <a href="one_list.do" class="caption_a"> 더보기 </a></h2>
									</caption>
									<colgroup>
										<col width="10%" />
										<col width="25%"/>
										<col width="15%"/>
										<col width="10%"/>
									</colgroup>
									<thead>
										<tr>
											<th class="th_border"> 구분 </th>
											<th class="th_border"> 상담제목 </th>
											<th class="th_border"> 작성날짜 </th>
											<th> 답변여부 </th>
										</tr>
									</thead>
									
									<tbody>
										<tr>
											<td colspan="4">  최근 목록이 없습니다.</td>
										</tr>	
									</tbody>
								</table>
							</div>
							<br><br><br>
							<div class="div_one">
									<table class="tb_hjs">
										<caption class="caption-hjs"> 
											<h2> 나의 팔로잉/팔로워 <a href="#" class="caption_a"> 더보기 </a> </h2></caption>
												
											<colgroup>
												<col width="25%" />
												<col width="25%"/>
											</colgroup>
											<thead>
												<tr>
													<th colspan="2" class="th_border"> 팔로잉 ID </th>
													<th colspan="2"> 팔로워 ID </th>
												</tr>
											</thead>
											
											<tbody>
												<tr>
													<td colspan="4">  팔로잉/팔로워가 없습니다. </td>	
												</tr>
											</tbody>
									</table>
								</div>
							</div>
						</div>
						<hr class="hr_style"/>
					</div>
				</div>
			</div>
		</div>
	</div>
<!-- 5. footer1.jsp : footer -->
<%@ include file="../footer1.jsp"%>

<!-- 6. 페이지별 script 추가해 주세요. -->

<!-- 7. footer2.jsp : script -->
<%@ include file="../footer2.jsp"%> 
