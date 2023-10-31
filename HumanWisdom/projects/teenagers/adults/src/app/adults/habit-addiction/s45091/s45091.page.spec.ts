import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45091Page } from './s45091.page';

describe('S45091Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45091Page;
  let fixture: ComponentFixture<S45091Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45091Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45091Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
