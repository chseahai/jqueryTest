<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>data</title>
    <style>
        *{
            margin:0;
            padding:0;
        }
        .show{
            color:red;
            background: paleturquoise;
            height:300px;
            width:300px;
            margin:0 auto;
        }
    </style>
</head>
<body>
<?php
    $id=$_GET["pid"];
?>
<input id="ph" type="hidden" value="<?php echo $id; ?>" />
<div class="show">

</div>
  <script src="../library/jquery-1.11.0.js"></script>
  <script>
  var pid=$("#ph").val();
//    $.ajax({
//        url:"data.json",
//        type:"GET",
//        success:function(data){
//            console.log(data);
//            for(var i=0;i<data.length;i++){
//                if(pid==data[i].pid){
//                $(".show").html(data[i].info);
//                return;
//                }
//            }
//        }
//    })
			$.get("data.json",function(data){
				for(var i = 0;i<data.length;i++){
					if(pid==data[i].pid){
						$(".show").html(data[i].info);

						return;
					}
				}
			})
  </script>
</body>
</html>