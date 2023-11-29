import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132132Page } from './s132132.page';

describe('S132132Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132132Page;
  let fixture: ComponentFixture<S132132Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132132Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132132Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
