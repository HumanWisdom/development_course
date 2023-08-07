import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134199Page } from './s134199.page';

describe('S134199Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134199Page;
  let fixture: ComponentFixture<S134199Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134199Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134199Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
