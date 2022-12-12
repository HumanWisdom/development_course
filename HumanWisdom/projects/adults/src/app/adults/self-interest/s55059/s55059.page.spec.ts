import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55059Page } from './s55059.page';

describe('S55059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55059Page;
  let fixture: ComponentFixture<S55059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
