import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55011Page } from './s55011.page';

describe('S55011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55011Page;
  let fixture: ComponentFixture<S55011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
