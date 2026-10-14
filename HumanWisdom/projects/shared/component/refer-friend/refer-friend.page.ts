import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AdultsService } from '../../../adults/src/app/adults/adults.service';
import { ProgramType } from '../../models/program-model';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.page.html',
  styleUrls: ['./refer-friend.page.scss'],
})
export class ReferFriendPage implements OnInit {
  email = '';
  name = '';
  content = '';
  enableAlert = false;
  linkCopied = false;
  nameTouched = false;
  emailTouched = false;
  emailElmtRegex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$');
  isAdults: boolean = true;
  referralLink: string = 'https://onelink.to/hsnt8b';
  shareText: string = 'Good things are even better when shared. Check out HappierMe and take a step towards a happier, healthier life together!';

  constructor(
    private service: AdultsService, 
    private location: Location, 
    public platform: Platform,
    private router: Router
  ) { 
    this.checkProgramType();
  }

  ngOnInit() {
    this.checkProgramType();
  }

  checkProgramType() {
    if (this.router.url.includes('/teenagers') || SharedService.ProgramId == ProgramType.Teenagers) {
      this.isAdults = false;
    } else {
      this.isAdults = true;
    }
  }

  copyAppLink() {
    const appLink = this.referralLink;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(appLink).then(() => {
        this.linkCopied = true;
        setTimeout(() => { this.linkCopied = false; }, 3000);
      }).catch(() => {
        this.fallbackCopy(appLink);
      });
    } else {
      this.fallbackCopy(appLink);
    }
  }

  private fallbackCopy(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    try {
      document.execCommand('copy');
      this.linkCopied = true;
      setTimeout(() => { this.linkCopied = false; }, 3000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
    document.body.removeChild(el);
  }

  shareViaWeb() {
    if (navigator.share) {
      navigator.share({
        title: 'HappierMe',
        text: this.shareText,
        url: this.referralLink,
      }).catch(() => {
        // User cancelled or dismissed share
      });
    } else {
      this.copyAppLink();
    }
  }

  shareVia(platform: string) {
    const encodedUrl = encodeURIComponent(this.referralLink);
    const encodedText = encodeURIComponent(this.shareText);
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'instagram':
        this.copyAppLink();
        this.content = 'Link copied to clipboard! You can paste it in Instagram.';
        this.enableAlert = true;
        return;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;
        break;
      case 'x':
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  }

  sharewhatsapp() {
    this.shareVia('whatsapp');
  }

  keyname(value: any) {
    this.name = value ? value.value : '';
  }

  keyemail(value: any) {
    this.email = value ? value.value : '';
  }

  goBack() {
    this.location.back();
  }

  handleTreeSisterClick() {
    const url = this.isAdults ? '/adults/treesisters' : '/teenagers/treesisters';
    this.router.navigate([url]);
  }

  submitrefer() {
    this.nameTouched = true;
    this.emailTouched = true;

    if (this.disabled()) {
      return;
    }

    let userId = JSON.parse(localStorage.getItem("userId") || '0');
    let data = {
      "UserId": userId,
      "FriendName": this.name.trim(),
      "FriendEmail": this.email.trim(),
      "ConvertedDate": '',
    };

    this.service.referfrd(data).subscribe({
      next: (res) => {
        if (res) {
          this.email = '';
          this.name = '';
          this.nameTouched = false;
          this.emailTouched = false;
          const nameEl = document.getElementById('name') as HTMLInputElement;
          const emailEl = document.getElementById('email') as HTMLInputElement;
          if (nameEl) nameEl.value = '';
          if (emailEl) emailEl.value = '';

          this.content = 'Mail Sent successfully';
          this.enableAlert = true;
        }
      },
      error: () => {
        this.content = 'Failed to send invite. Please try again.';
        this.enableAlert = true;
      }
    });
  }

  getAlertcloseEvent(event: any) {
    this.content = '';
    this.enableAlert = false;
  }

  disabled() {
    if (this.emailElmtRegex.test(this.email.trim()) && this.name.trim().length >= 3) {
      return false;
    } else {
      return true;
    }
  }

  namevalidation() {
    if (!this.nameTouched) {
      return '';
    }
    if (this.name.trim() === '') {
      return 'Please enter friend’s name';
    } else if (this.name.trim().length < 3) {
      return 'Name must be at least 3 characters';
    } else {
      return '';
    }
  }

  emailvalidation() {
    if (!this.emailTouched) {
      return '';
    }
    if (this.email.trim() === '') {
      return 'Please enter friend’s email';
    } else if (!(this.emailElmtRegex.test(this.email.trim()))) {
      return 'Please enter valid email';
    } else {
      return '';
    }
  }
}
