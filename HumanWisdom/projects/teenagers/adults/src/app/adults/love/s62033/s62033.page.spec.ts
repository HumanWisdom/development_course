import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62033Page } from './s62033.page';

describe('S62033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62033Page;
  let fixture: ComponentFixture<S62033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
