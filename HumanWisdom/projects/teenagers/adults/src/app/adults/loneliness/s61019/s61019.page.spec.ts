import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61019Page } from './s61019.page';

describe('S61019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61019Page;
  let fixture: ComponentFixture<S61019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
