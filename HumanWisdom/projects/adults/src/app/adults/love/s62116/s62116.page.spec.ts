import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62116Page } from './s62116.page';

describe('S62116Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62116Page;
  let fixture: ComponentFixture<S62116Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62116Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62116Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
