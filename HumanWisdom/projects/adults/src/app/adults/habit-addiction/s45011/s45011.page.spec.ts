import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45011Page } from './s45011.page';

describe('S45011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45011Page;
  let fixture: ComponentFixture<S45011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
