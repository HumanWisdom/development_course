import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18017Page } from './s18017.page';

describe('S18017Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18017Page;
  let fixture: ComponentFixture<S18017Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18017Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18017Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
