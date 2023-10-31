import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61048Page } from './s61048.page';

describe('S61048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61048Page;
  let fixture: ComponentFixture<S61048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
