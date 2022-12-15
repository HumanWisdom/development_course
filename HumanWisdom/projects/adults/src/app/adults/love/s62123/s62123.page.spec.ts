import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62123Page } from './s62123.page';

describe('S62123Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62123Page;
  let fixture: ComponentFixture<S62123Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62123Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62123Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
