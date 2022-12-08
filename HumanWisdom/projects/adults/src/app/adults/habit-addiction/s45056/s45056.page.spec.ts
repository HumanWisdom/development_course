import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45056Page } from './s45056.page';

describe('S45056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45056Page;
  let fixture: ComponentFixture<S45056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
