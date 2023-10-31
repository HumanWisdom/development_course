import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62019Page } from './s62019.page';

describe('S62019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62019Page;
  let fixture: ComponentFixture<S62019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
