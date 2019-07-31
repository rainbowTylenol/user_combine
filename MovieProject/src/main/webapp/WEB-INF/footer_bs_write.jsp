
 <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

    
    <!--   hm |  footer section-->
    <footer class="ht-footer">
        <div class="container">
            <div class="flex-parent-ft">
                <div class="flex-child-ft item1">
                    <a href="index.html"><img class="logo" src="resources/images/logo1.png" alt=""></a>
                </div>

                <div class="flex-child-ft item2">
                    <a href="faq_list.html">
                        <h4>고객센터 </h4>
                    </a>
                </div>

                <div class="flex-child-ft item3">
                    <a href="one_regist.html">
                        <h4>1:1 문의</h4>
                    </a>
                </div>

                <div class="flex-child-ft item4">
                    <a href="약관.html"
                        onclick="window.open(this.href, '_blank', 'width=500px,height=500px,toolbars=no,scrollbars=no'); return false;">
                        <h4>약관보기</h4>
                    </a>
                   
                </div>
            </div>
            <div class="ft-copyright">
                <div class="ft-left">
                    <p>© 2019 Bit 2 Jo. All Rights Reserved.</p>
                </div>
                <div class="backtotop">
                    <p><a href="#" id="back-to-top">맨 위로 <i class="ion-ios-arrow-thin-up"></i></a></p>
                </div>
            </div>
    	</div>        
    </footer>
    <!--   hm |  end of footer section-->


</body>
<script src="../../resources/vendor/jquery/jquery.min.js"></script>
<script src="../../resources/vendor/bootstrap/js/bootstrap.min.js"></script>

<script src="../../resources/vendor/metisMenu/metisMenu.js"></script>
<script src="../../resources/vendor/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<script src="../../resources/vendor/summernote/summernote.min.js"></script>
<script src="../../resources/vendor/markdown/markdown.js"></script>
<script src="../../resources/vendor/to-markdown/to-markdown.js"></script>
<script src="../../resources/vendor/bootstrap-markdown/bootstrap-markdown.js"></script>
<script src="../../resources/vendor/common.js"></script>
<script>

     //n자 남음 구현
     $(function() {
         $('.post-title').keyup(function (e){
             var content = $(this).val();
             $(this).height(((content.split('\n').length + 1) * 1.5) + 'em');
             $('#counter').html(content.length + '/50');
         });
         $('.post-title').keyup();
   });

   
     
     $(function() {
  		// summernote editor
  		$('.summernote').summernote({
  			height: 300,
  			focus: true,
  			onpaste: function() {
  				alert('You have pasted something to the editor');
  			}
  		});
  		 $("button").attr("aria-expanded","true");
  	});
     
     
    
     
</script>

	

<script src="<c:url value="/resources/js/plugins.js" />"></script>
<script src="<c:url value="/resources/js/plugins2.js" />"></script>
<%-- <script src="<c:url value="/resources/js/header_custom.js" />"></script> --%>
<%-- <script src="<c:url value="/resources/js/hm_js.js" />"></script> --%>
    <!--  hm |   js 추가 -->
</html>
