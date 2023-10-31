import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61053Page } from './s61053.page';

describe('S61053Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61053Page;
  let fixture: ComponentFixture<S61053Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61053Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61053Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
