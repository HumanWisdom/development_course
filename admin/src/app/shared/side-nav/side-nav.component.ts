import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  private $BODY;
  private $MENU_TOGGLE;
  private $SIDEBAR_MENU;
  private $SIDEBAR_FOOTER;
  private $LEFT_COL;
  private $RIGHT_COL;
  private $NAV_MENU;
  private $FOOTER;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  anchorClicked(event) {
    let target = event.srcElement.id;

    let $li = $("#" + target.replace("chevron", "li")).parent();

    if ($li.is(".active")) {
      $li.removeClass("active active-sm");
      $("ul:first", $li).slideUp(function() {});
    } else {
      // prevent closing menu if we are on child menu
      if (!$li.parent().is(".child_menu")) {
        $("#sidebar-menu")
          .find("li")
          .removeClass("active active-sm");
        $("#sidebar-menu")
          .find("li ul")
          .slideUp();
      }

      $li.addClass("active");

      $("ul:first", $li).slideDown(function() {});
    }
  }

  plot() {
    console.log("in sidebar");

    this.$BODY = $("body");
    this.$MENU_TOGGLE = $("#menu_toggle");
    this.$SIDEBAR_MENU = $("#sidebar-menu");
    this.$SIDEBAR_FOOTER = $(".sidebar-footer");
    this.$LEFT_COL = $(".left_col");
    this.$RIGHT_COL = $(".right_col");
    this.$NAV_MENU = $(".nav_menu");
    this.$FOOTER = $("footer");

    let $a = this.$SIDEBAR_MENU.find("a");
    this.$SIDEBAR_MENU.find("a").on("click", function(ev) {
      let $li = $(this).parent();

      if ($li.is(".active")) {
        $li.removeClass("active active-sm");
        $("ul:first", $li).slideUp(function() {
          this.setContentHeight();
        });
      } else {
        // prevent closing menu if we are on child menu
        if (!$li.parent().is(".child_menu")) {
          this.$SIDEBAR_MENU.find("li").removeClass("active active-sm");
          this.$SIDEBAR_MENU.find("li ul").slideUp();
        }

        $li.addClass("active");

        $("ul:first", $li).slideDown(function() {
          this.setContentHeight();
        });
      }
    });

    // toggle small or large menu
    this.$MENU_TOGGLE.on("click", function() {
      if (this.$BODY.hasClass("nav-md")) {
        this.$SIDEBAR_MENU.find("li.active ul").hide();
        this.$SIDEBAR_MENU
          .find("li.active")
          .addClass("active-sm")
          .removeClass("active");
      } else {
        this.$SIDEBAR_MENU.find("li.active-sm ul").show();
        this.$SIDEBAR_MENU
          .find("li.active-sm")
          .addClass("active")
          .removeClass("active-sm");
      }

      this.$BODY.toggleClass("nav-md nav-sm");

      this.setContentHeight();
    });
  }

  setContentHeight() {
    // reset height
    this.$RIGHT_COL.css("min-height", $(window).height());

    const bodyHeight = this.$BODY.outerHeight();
    const footerHeight = this.$BODY.hasClass("footer_fixed") ? -10 : this.$FOOTER.height();
    const leftColHeight = this.$LEFT_COL.eq(1).height() + this.$SIDEBAR_FOOTER.height();
    let contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

    // normalize content
    contentHeight -= this.$NAV_MENU.height() + footerHeight;

    this.$RIGHT_COL.css("min-height", contentHeight);
  }

  routeFaq(){
    this.router.navigate(['users/faq'])
  }
  routePricing(){
    this.router.navigate(['users/pricing'])
  }
  routeProgram(){
    this.router.navigate(['users/program'])
  }
  routeSection(){
    console.log("in program")
    this.router.navigate(['users/section'])

  }
  routeModule(){
    this.router.navigate(['users/modules'])

  }

  /*routeForum(){
    this.router.navigate(['users/forum'])

  }*/
  routeModerator(){
    this.router.navigate(['users/moderator'])

  }
  routeReflection(){
    this.router.navigate(['users/reflection'])

  }
  routeHome(){
    this.router.navigate(['users'])

  }
  routeSubscription(){
    this.router.navigate(['users/subscription'])

  }
  routeAssessment(){
    this.router.navigate(['users/assessment'])

  }
  routeQuestion(){
    this.router.navigate(['users/question'])

  }
  routeCategory(){
    this.router.navigate(['users/category'])

  }
  routeGroup(){
    this.router.navigate(['users/wisdomGroup'])

  }
  routeCoupon(){
    this.router.navigate(['users/coupons'])

  }
  routePoints(){
    this.router.navigate(['users/points'])

  }
  routeTags(){
    this.router.navigate(['users/tags'])

  }
  routeScenarios(){
    this.router.navigate(['users/scenarios'])

  }
  routeKeys(){
    this.router.navigate(['users/keys'])

  }
  routeTestimonial(){
    this.router.navigate(['users/testimonials'])

  }
  routeForums(){
    this.router.navigate(['users/forums'])

  }
  routeSiteSection(){
    this.router.navigate(['users/sitesections'])

  }

  routeScreens(){
    this.router.navigate(['users/screens'])
  }

  routeDailyPractise(){
    this.router.navigate(['users/dailypractises'])
  }

  routePopup(){
    this.router.navigate(['users/popup'])
  }

  routeBlog(){
    this.router.navigate(['users/blog'])
  }

  routeAffiliate(){
    this.router.navigate(['users/affiliate'])
  }

  routeAffiliateAllUser(){
    this.router.navigate(['users/affiliate-all-users/0'])
  }

  routeViewAffiliate(){
    this.router.navigate(['users/view-affiliate'])
  }

  routeDailyQuestion(){
    this.router.navigate(['users/dailyquestion'])

  }
  routeOptions(){
    this.router.navigate(['users/options'])

  }
  routeModulePercent(){
    this.router.navigate(['users/module-percent'])

  }
  routeSessions(){
    this.router.navigate(['users/session'])

  }
  routeAllot(){
    this.router.navigate(['users/allotScreen'])

  }
  routeGuidedQuestion(){
    this.router.navigate(['users/guidedQuestion'])
  }

  routeGuidedTopics(){
    this.router.navigate(['users/guidedQuestionTopics'])
  }
  
  routeNotificationType(){
    this.router.navigate(['users/notificationType'])
  }
  routeNotification(){
    this.router.navigate(['users/notification'])
  }
}
