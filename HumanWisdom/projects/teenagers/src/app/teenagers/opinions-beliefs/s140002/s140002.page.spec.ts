import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140002Page } from './s140002.page';

describe('S140002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140002Page;
  let fixture: ComponentFixture<S140002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
