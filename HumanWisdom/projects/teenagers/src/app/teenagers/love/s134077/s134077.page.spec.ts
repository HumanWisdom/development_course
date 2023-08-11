import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134077Page } from './s134077.page';

describe('S134077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134077Page;
  let fixture: ComponentFixture<S134077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
