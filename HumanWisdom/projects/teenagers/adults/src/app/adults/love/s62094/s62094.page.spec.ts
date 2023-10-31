import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62094Page } from './s62094.page';

describe('S62094Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62094Page;
  let fixture: ComponentFixture<S62094Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62094Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62094Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
