import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62163Page } from './s62163.page';

describe('S62163Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62163Page;
  let fixture: ComponentFixture<S62163Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62163Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62163Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
