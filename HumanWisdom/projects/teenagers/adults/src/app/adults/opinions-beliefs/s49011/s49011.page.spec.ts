import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49011Page } from './s49011.page';

describe('S49011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49011Page;
  let fixture: ComponentFixture<S49011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
