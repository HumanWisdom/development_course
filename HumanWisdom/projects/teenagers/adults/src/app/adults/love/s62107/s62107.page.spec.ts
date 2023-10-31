import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62107Page } from './s62107.page';

describe('S62107Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62107Page;
  let fixture: ComponentFixture<S62107Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62107Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62107Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
