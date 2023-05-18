import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116059Page } from './s116059.page';

describe('S116059Page', () => {
      
    let component:  S116059Page;
  let fixture: ComponentFixture<S116059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
