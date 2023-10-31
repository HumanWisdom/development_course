import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62171Page } from './s62171.page';

describe('S62171Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62171Page;
  let fixture: ComponentFixture<S62171Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62171Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62171Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
