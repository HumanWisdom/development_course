import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18100Page } from './s18100.page';

describe('S18100Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18100Page;
  let fixture: ComponentFixture<S18100Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18100Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
