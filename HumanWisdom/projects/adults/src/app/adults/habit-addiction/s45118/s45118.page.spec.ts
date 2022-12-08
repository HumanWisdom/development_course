import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45118Page } from './s45118.page';

describe('S45118Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45118Page;
  let fixture: ComponentFixture<S45118Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45118Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45118Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
