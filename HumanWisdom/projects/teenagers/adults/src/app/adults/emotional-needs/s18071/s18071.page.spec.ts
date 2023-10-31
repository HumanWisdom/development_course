import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18071Page } from './s18071.page';

describe('S18071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18071Page;
  let fixture: ComponentFixture<S18071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
