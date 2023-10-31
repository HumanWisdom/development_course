import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61045Page } from './s61045.page';

describe('S61045Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61045Page;
  let fixture: ComponentFixture<S61045Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61045Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61045Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
