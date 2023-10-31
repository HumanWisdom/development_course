import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55044Page } from './s55044.page';

describe('S55044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55044Page;
  let fixture: ComponentFixture<S55044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
