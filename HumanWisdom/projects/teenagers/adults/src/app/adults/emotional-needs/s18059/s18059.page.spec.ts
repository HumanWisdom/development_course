import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18059Page } from './s18059.page';

describe('S18059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18059Page;
  let fixture: ComponentFixture<S18059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
