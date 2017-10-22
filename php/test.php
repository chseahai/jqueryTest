<?php
//判断用户名存不存在
				$cName = "";
				$cName2="";
				if($_SESSION["uName"]){
					global $cName;    //相当于在函数体内部定义成全局的变量
					$cName = "active1";
					$cName2 = "active";

				}else{
					global $cName;
					$cName="active";
					$cName2 = "active1";
				}

		?>
		<span class="filde turl1 r <?php echo $cName2;?>">
			 欢迎光临寺库&nbsp;&nbsp;&nbsp;&nbsp;
			 <a href="login.php" class="turl1">请登录</a>
			 <a href="register.php" class="turl1" style="padding: 0;">免费注册</a>
		</span>
		<span class="success turl1 r active <?php echo $cName;?>">
			 欢迎&nbsp;&nbsp;
			 <a href="javascript:" class="turl1" style="color: #5b4f9d;">
			 	<?php
					echo $_SESSION["uName"];

				?>
			 </a>
			光临寺库&nbsp;&nbsp;
			 <a href="javascript:" class="turl1 exit" style="padding: 0;">退出</a>
		</span>