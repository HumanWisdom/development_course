import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61036Page } from './s61036.page';

describe('S61036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61036Page;
  let fixture: ComponentFixture<S61036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
