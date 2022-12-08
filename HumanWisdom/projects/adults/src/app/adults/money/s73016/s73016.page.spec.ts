import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73016Page } from './s73016.page';

describe('S73016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73016Page;
  let fixture: ComponentFixture<S73016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
