import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64011Page } from './s64011.page';

describe('S64011Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64011Page;
  let fixture: ComponentFixture<S64011Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64011Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64011Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
