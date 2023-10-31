import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18092Page } from './s18092.page';

describe('S18092Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18092Page;
  let fixture: ComponentFixture<S18092Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18092Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18092Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
