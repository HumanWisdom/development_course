import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18011Page } from './s18011.page';

describe('S18011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18011Page;
  let fixture: ComponentFixture<S18011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
