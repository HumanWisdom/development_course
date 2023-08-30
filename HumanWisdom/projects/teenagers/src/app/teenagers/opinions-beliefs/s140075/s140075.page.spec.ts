import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140075Page } from './s140075.page';

describe('S140075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140075Page;
  let fixture: ComponentFixture<S140075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
