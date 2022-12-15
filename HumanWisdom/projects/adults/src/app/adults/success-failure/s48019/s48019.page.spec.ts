import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48019Page } from './s48019.page';

describe('S48019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48019Page;
  let fixture: ComponentFixture<S48019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
