import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62032Page } from './s62032.page';

describe('S62032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62032Page;
  let fixture: ComponentFixture<S62032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
