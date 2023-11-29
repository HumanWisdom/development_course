import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132217Page } from './s132217.page';

describe('S132217Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132217Page;
  let fixture: ComponentFixture<S132217Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132217Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132217Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
