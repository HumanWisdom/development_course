import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25019Page } from './s25019.page';

describe('S25019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25019Page;
  let fixture: ComponentFixture<S25019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
