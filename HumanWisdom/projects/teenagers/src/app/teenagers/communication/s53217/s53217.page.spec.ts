import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53217Page } from './s53217.page';

describe('S53217Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53217Page;
  let fixture: ComponentFixture<S53217Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53217Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53217Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
