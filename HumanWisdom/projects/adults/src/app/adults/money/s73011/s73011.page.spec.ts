import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73011Page } from './s73011.page';

describe('S73011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73011Page;
  let fixture: ComponentFixture<S73011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
