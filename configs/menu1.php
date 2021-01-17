<?php 				
include("mysendsms.php");

//$userid="amos";
	  
  ob_start();
  session_start();

//$timeout = 300; // Number of seconds until it times out.
//   
//// Check if the timeout field exists.
//if(isset($_SESSION['timeout'])) {
//    // See if the number of seconds since the last
//    // visit is larger than the timeout period.
//    
//    $duration = time() - (int)$_SESSION['timeout'];
//    if($duration > $timeout) 
//    {
//        // Destroy the session and restart it.
//        
//
//        session_destroy();
//        session_start();
//    } 
//}
// 
//// Update the timout field with the current time.
//$_SESSION['timeout'] = time();  

  $userid= $_SESSION["user"];
  if(!isset($userid) || (trim($userid) == ""))
  {
       header("location: index.php");
       exit();
 } 

?>


<div class="left-sidebar-pro">
            <nav id="sidebar">
                <div class="sidebar-header">
                      <a href="#"><img style="height:100px; width:100px;" src="../pages/img/total.jpg"  alt="" />
                    </a>
                </div>
                <div class="left-custom-menu-adp-wrap">
                    <ul class="nav navbar-nav left-sidebar-menu-pro">
                        <li class="nav-item">
                            <a href="nyumbani.php" class="nav-link"><i class="fal fa-home-lg-alt"></i> <span class="mini-dn">Dashboard</span></a>
                        </li>
                        <li class="nav-item"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link dropdown-toggle"><i class="fal fa-truck-container"></i> <span class="mini-dn"> Tankers</span> <span class="indicator-right-menu mini-dn"><i class="fa indicator-mn fa-angle-left"></i></span></a>
                            <div role="menu" class="dropdown-menu left-menu-dropdown animated flipInX">
                                <a href="add.php" class="dropdown-item">Record </a>
                                <a href="view_tanker.php" class="dropdown-item"> View</a>
                        </li>
                        <li class="nav-item"><a href="stock.php" class="nav-link"><i class="fal fa-analytics"></i> <span class="mini-dn">Stock</span></a>
                        </li>
                        <li class="nav-item"><a href="meter.php" class="nav-link"><i class="fal fa-clock"></i> <span class="mini-dn">Meter Reading</span></a>
                        </li>
                        <li class="nav-item"><a href="sale.php" class="nav-link"><i class="fal fa-exchange"></i> <span class="mini-dn">Sales</span></a>
                        </li>
                        <li class="nav-item"><a href="report.php" class="nav-link"><i class="fal fa-analytics"></i> <span class="mini-dn">Report</span></a>
                        </li>
                        <li class="nav-item"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link dropdown-toggle"><i class="fal fa-user"></i> <span class="mini-dn">Account</span> <span class="indicator-right-menu mini-dn"><i class="fa indicator-mn fa-angle-left"></i></span></a>
                            <div role="menu" class="dropdown-menu left-menu-dropdown animated flipInX">
                                <a href="manage.php" class="dropdown-item">Users</a>
                                <a href="profile.php" class="dropdown-item"> Profile </a>
                                
                            </div>
                        </li>
                       
                        
                        
                       
                    </ul>
                </div>
            </nav>
        </div>
 
          <!-- Header top area start-->
        <div class="content-inner-all">
            <div class="header-top-area">
                <div class="fixed-header-top">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-1 col-md-6 col-sm-6 col-xs-12">
                                <button type="button" id="sidebarCollapse" class="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn">
                                    <i class="fa fa-bars"></i>
                                </button>
                                
                            </div>
                            <div class="col-lg-6 col-md-1 col-sm-1 col-xs-12">
                                <div class="header-top-menu tabl-d-n">
                                    <ul class="nav navbar-nav mai-top-nav">
                                        <li class="nav-item"><a href="nyumbani.php" class="nav-link">Home</a>
                                        </li>
                                        <li class="nav-item"><a href="#" class="nav-link">Contact</a> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                                <div class="header-right-info">
                                    <ul class="nav navbar-nav mai-top-nav header-right-menu">
                                      
                                        
                                     
                                         
                                     
                                        
                                        <li class="nav-item">
                                            <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link dropdown-toggle">
                                                <span class="admin-name"><i class="fal fa-user-circle"></i> <?php  echo "$userid"; ?></span>
                                                <span class="author-project-icon adminpro-icon adminpro-down-arrow"></span>
                                            </a>
                                            <ul role="menu" class="dropdown-header-top author-log dropdown-menu animated flipInX">
                                                <li><a href="profile.php"><span class="adminpro-icon adminpro-user-rounded author-log-ic"></span>Profile</a>
                                                </li>
                                                <li><a href="manage.php"><span class="adminpro-icon adminpro-user-rounded author-log-ic"></span>Users</a>
                                                </li>
                                                <li><a href="logout.php"><span class="adminpro-icon adminpro-locked author-log-ic"></span>Log Out</a>
                                                </li>
                                            </ul>
                                        </li>
                                     
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Header top area end-->



