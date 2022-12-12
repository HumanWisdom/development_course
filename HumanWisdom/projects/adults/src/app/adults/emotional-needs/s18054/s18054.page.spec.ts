import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18054Page } from './s18054.page';

describe('S18054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18054Page;
  let fixture: ComponentFixture<S18054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
