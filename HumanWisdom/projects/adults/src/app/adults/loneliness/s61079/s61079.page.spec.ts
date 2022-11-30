import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61079Page } from './s61079.page';

describe('S61079Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61079Page;
  let fixture: ComponentFixture<S61079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
