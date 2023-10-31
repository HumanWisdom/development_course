import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62104Page } from './s62104.page';

describe('S62104Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62104Page;
  let fixture: ComponentFixture<S62104Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62104Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62104Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
