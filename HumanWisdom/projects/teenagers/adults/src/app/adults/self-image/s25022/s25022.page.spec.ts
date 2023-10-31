import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25022Page } from './s25022.page';

describe('S25022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25022Page;
  let fixture: ComponentFixture<S25022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
